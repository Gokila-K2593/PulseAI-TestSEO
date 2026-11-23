# PulseAI Labs — Zero-SEO Test Website for APEX Demo

This is a real production Next.js website engineered specifically as a **live test ground** to demonstrate how the **APEX AI SEO & GEO Automation Platform** transforms an un-optimized website from **0% visibility to #1 AI Search Recommendation**.

---

## 🎯 Deliberate Zero-SEO Flaws Baked In:

| Area | Deliberate Flaw | APEX Detection Module |
| :--- | :--- | :--- |
| **Robots.txt** | ❌ File missing (Returns HTTP 404) | `1. Technical SEO` (Flags 404 gap) |
| **Sitemap.xml** | ❌ File missing (Returns HTTP 404) | `1. Technical SEO` & `Sitemap Engine` |
| **Page Titles** | ❌ Every page uses identical title `<title>PulseAI Labs</title>` | `1. Technical SEO` (Title Cannibalization Alert) |
| **Meta Descriptions** | ❌ Missing meta descriptions on all pages | `2. Content SEO` |
| **Thin Content** | ❌ `/services` has less than 100 words | `1. Technical SEO` (Thin Pages Warning) |
| **Heading Structure**| ❌ `/about` has 3 separate `<h1>` tags | `2. Content SEO` (H1 Hierarchy Violation) |
| **Schema.org JSON-LD**| ❌ Zero Organization or FAQPage schema | `5. GEO Engine` (0% Citations, Unranked in AI) |

---

## 🚀 How to Deploy on Vercel (2 Minutes):

### 1. Initialize Git & Push to GitHub:
```bash
cd C:\Users\Goku\.gemini\antigravity\scratch\pulseai-test-site
git init
git add .
git commit -m "feat: initial pulseai test site with zero seo"
```

Create a new repository on your GitHub (e.g. `pulseai-test-site`) and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/pulseai-test-site.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel:
1. Open [vercel.com/new](https://vercel.com/new).
2. Select your `pulseai-test-site` repository.
3. Click **Deploy** (No environment variables needed).
4. Vercel will give you a live URL: e.g. `https://pulseai-test-site.vercel.app`.

---

## 🧪 How to Run Live Audit in APEX Platform:

1. Open APEX Platform at `http://localhost:3000`.
2. Click **+ Add Client**:
   * **Name:** `PulseAI Labs`
   * **Domain:** `https://pulseai-test-site.vercel.app`
   * **Industry:** `AI Systems & Software Engineering`
   * **Cities:** `Nagercoil, Kanyakumari`
   * **Seed Query:** `best ai engineering companies in Nagercoil`
   * **Competitors:** `TechBulls, Adroit Technologies, Infocrux`
3. Click **Save & Run Live Audit**:
   * **Run 1 (Baseline Reality):**
     * Technical Health Score: **~35/100** (Robots 404, Sitemap 404, Duplicate Titles, Thin Content)
     * GEO Citations: **0% Cited / Not Found in AI Grounding** (Score: 8/100)
4. Show Senior/CEO how APEX auto-generates:
   * Valid `robots.txt`
   * Dynamic `sitemap.xml`
   * Schema.org `Organization` + `FAQPage` JSON-LD
   * Fixed Title tags
5. Deploy fixes $\to$ **Run 2**:
   * Technical Health Score jumps to **98/100**!
   * GEO Visibility jumps to **94/100** with **#1 Primary AI Recommendation**!
