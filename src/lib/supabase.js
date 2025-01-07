import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://apnaqkslxtwgvezuqkui.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbmFxa3NseHR3Z3ZlenVxa3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxOTMxODIsImV4cCI6MjA1MTc2OTE4Mn0.xxUv-rHx9ed_CmpnK8dgSEj0b3vGZqgU-jDqf8owGC4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})