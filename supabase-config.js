// WinCash Global — configuration publique Supabase
// Remplacez les deux valeurs ci-dessous par l’URL du projet et la clé PUBLISHABLE / anon public.
// N’insérez JAMAIS une clé secret ou service_role dans le navigateur.
(function(){
  const SUPABASE_URL = 'COLLEZ_ICI_URL_DU_PROJET';
  const SUPABASE_PUBLISHABLE_KEY = 'COLLEZ_ICI_CLE_PUBLIQUE';
  if (window.supabase && SUPABASE_URL.startsWith('https://') && !SUPABASE_URL.includes('COLLEZ_ICI') && !SUPABASE_PUBLISHABLE_KEY.includes('COLLEZ_ICI')) {
    window.wincashSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  }
})();
