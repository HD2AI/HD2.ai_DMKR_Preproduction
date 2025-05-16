
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vqucdvuvrhykphqtwroh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxdWNkdnV2cmh5a3BocXR3cm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzMDQ5ODUsImV4cCI6MjA2MTg4MDk4NX0.yE7LVm5gM2FJw0vZaakx4FlQ51euO10JPKF4UnHMG8w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
  