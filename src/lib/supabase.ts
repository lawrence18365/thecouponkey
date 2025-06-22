import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { 
  Store, 
  Category, 
  Coupon, 
  EmailSubscriber, 
  CouponClick,
  CouponWithStore,
  StoreWithCoupons,
  Tables
} from './types'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Database helper functions
export class DatabaseService {
  
  // Categories
  static async getCategories(): Promise<Category[]> {
    const { data, error } = await supabase
      .from(Tables.CATEGORIES)
      .select('*')
      .order('name')
    
    if (error) throw new Error(`Error fetching categories: ${error.message}`)
    return data || []
  }

  static async getFeaturedCategories(): Promise<Category[]> {
    const { data, error } = await supabase
      .from(Tables.CATEGORIES)
      .select('*')
      .eq('is_featured', true)
      .order('name')
    
    if (error) throw new Error(`Error fetching featured categories: ${error.message}`)
    return data || []
  }

  // Stores
  static async getStores(categoryId?: string): Promise<Store[]> {
    let query = supabase
      .from(Tables.STORES)
      .select('*')
    
    if (categoryId) {
      query = query.eq('category_id', categoryId)
    }
    
    const { data, error } = await query.order('name')
    
    if (error) throw new Error(`Error fetching stores: ${error.message}`)
    return data || []
  }

  static async getFeaturedStores(): Promise<Store[]> {
    const { data, error } = await supabase
      .from(Tables.STORES)
      .select('*')
      .eq('is_featured', true)
      .order('name')
    
    if (error) throw new Error(`Error fetching featured stores: ${error.message}`)
    return data || []
  }

  static async getStoreBySlug(slug: string): Promise<StoreWithCoupons | null> {
    const { data: store, error: storeError } = await supabase
      .from(Tables.STORES)
      .select(`
        *,
        category:categories(*)
      `)
      .eq('slug', slug)
      .single()
    
    if (storeError) {
      if (storeError.code === 'PGRST116') return null // Not found
      throw new Error(`Error fetching store: ${storeError.message}`)
    }

    // Get active coupons for this store
    const { data: coupons, error: couponsError } = await supabase
      .from(Tables.COUPONS)
      .select('*')
      .eq('store_id', store.id)
      .or('expires_at.is.null,expires_at.gte.now()')
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })
    
    if (couponsError) throw new Error(`Error fetching store coupons: ${couponsError.message}`)
    
    return {
      ...store,
      coupons: coupons || [],
      coupon_count: coupons?.length || 0
    }
  }

  // Coupons
  static async getFeaturedCoupons(limit: number = 12): Promise<CouponWithStore[]> {
    const { data, error } = await supabase
      .from(Tables.COUPONS)
      .select(`
        *,
        store:stores(*),
        category:categories(*)
      `)
      .eq('is_featured', true)
      .or('expires_at.is.null,expires_at.gte.now()')
      .order('created_at', { ascending: false })
      .limit(limit)
    
    if (error) throw new Error(`Error fetching featured coupons: ${error.message}`)
    return data || []
  }

  static async getCouponsByCategory(categorySlug: string, limit: number = 24): Promise<CouponWithStore[]> {
    const { data, error } = await supabase
      .from(Tables.COUPONS)
      .select(`
        *,
        store:stores(*),
        category:categories(*)
      `)
      .eq('category.slug', categorySlug)
      .or('expires_at.is.null,expires_at.gte.now()')
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(limit)
    
    if (error) throw new Error(`Error fetching category coupons: ${error.message}`)
    return data || []
  }

  static async getAllCoupons(page: number = 1, limit: number = 24): Promise<CouponWithStore[]> {
    const offset = (page - 1) * limit
    
    const { data, error } = await supabase
      .from(Tables.COUPONS)
      .select(`
        *,
        store:stores(*),
        category:categories(*)
      `)
      .or('expires_at.is.null,expires_at.gte.now()')
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)
    
    if (error) throw new Error(`Error fetching coupons: ${error.message}`)
    return data || []
  }

  // Email subscribers
  static async subscribeEmail(email: string): Promise<void> {
    const { error } = await supabase
      .from(Tables.EMAIL_SUBSCRIBERS)
      .insert([
        {
          email: email.toLowerCase().trim(),
          is_active: true,
          subscribed_at: new Date().toISOString()
        }
      ])
    
    if (error && error.code !== '23505') { // Ignore duplicate key errors
      throw new Error(`Error subscribing email: ${error.message}`)
    }
  }

  // Analytics
  static async trackCouponClick(couponId: string, userAgent?: string): Promise<void> {
    const { error } = await supabase
      .from(Tables.COUPON_CLICKS)
      .insert([
        {
          coupon_id: couponId,
          user_agent: userAgent,
          clicked_at: new Date().toISOString(),
          converted: false
        }
      ])
    
    if (error) {
      console.error('Error tracking coupon click:', error.message)
      // Don't throw error for analytics - shouldn't break user experience
    }

    // Increment click count on coupon
    const { error: updateError } = await supabase
      .from(Tables.COUPONS)
      .update({ 
        click_count: supabase.rpc('increment_click_count', { coupon_id: couponId }) 
      })
      .eq('id', couponId)
    
    if (updateError) {
      console.error('Error updating coupon click count:', updateError.message)
    }
  }

  // Search
  static async searchCoupons(query: string, limit: number = 24): Promise<CouponWithStore[]> {
    const { data, error } = await supabase
      .from(Tables.COUPONS)
      .select(`
        *,
        store:stores(*),
        category:categories(*)
      `)
      .or(`title.ilike.%${query}%,description.ilike.%${query}%,store.name.ilike.%${query}%`)
      .or('expires_at.is.null,expires_at.gte.now()')
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(limit)
    
    if (error) throw new Error(`Error searching coupons: ${error.message}`)
    return data || []
  }
}

export default supabase
