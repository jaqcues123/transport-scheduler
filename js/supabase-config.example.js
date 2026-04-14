/* ═══════════════════════════════════════════════
   Supabase Configuration — EXAMPLE FILE

   Copy this file to js/supabase-config.js and fill
   in your values. That file is gitignored and will
   never be committed.

   For production (GitHub Pages), these values are
   injected automatically by the GitHub Actions
   workflow using repository secrets.

   Where to find your values:
     Supabase Dashboard → Settings → API
       → Project URL       → SUPABASE_URL
       → anon public key   → SUPABASE_ANON_KEY
   ═══════════════════════════════════════════════ */

window.SUPABASE_URL      = 'https://YOUR_PROJECT_REF.supabase.co';
window.SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';

// GraphHopper routing API key — used by ghRoute() in geo.js for real road
// distances and toll detection. Free tier: graphhopper.com (500 req/day).
window.GRAPHHOPPER_KEY   = 'YOUR_GRAPHHOPPER_KEY_HERE';
