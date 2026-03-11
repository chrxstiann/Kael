# Link Tree Landing Page 🌟

Modern, responsive personal landing page dengan glassmorphism design dan theme toggle (Dark/Light mode).

## ✨ Features

- 🌓 Dark/Light mode toggle dengan animasi smooth
- ⭐ Bintang berkedip untuk dark mode
- ☁️ Awan mengambang untuk light mode
- 🎨 Glassmorphism design yang modern
- 📱 Fully responsive untuk semua device
- 🔗 Auto-detect icon dari URL
- 📧 Direct email link (buka email client langsung)
- 🎭 Animasi smooth dan hover effects

## 🚀 Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub dengan nama `username.github.io` (ganti `username` dengan username GitHub kamu)
2. Upload semua file ke repository:
   - `index.html`
   - `style.css`
   - `script.js`
   - `profile.jpg` (foto profile kamu)
3. Buka Settings → Pages
4. Pilih branch `main` dan folder `/ (root)`
5. Klik Save
6. Website kamu akan live di `https://username.github.io`

## 📝 Cara Edit Konten

### 1. Ganti Informasi Personal

Edit file `index.html`:

```html
<h1>Your Name</h1>
<p>Creative Developer | Designer | Content Creator<br>Building cool stuff on the internet ✨</p>
```

### 2. Ganti Foto Profile

**Cara 1: Upload foto ke repository**
1. Siapkan foto kamu (format: jpg, png, atau webp)
2. Upload foto ke repository dengan nama `profile.jpg`
3. Di `index.html`, hapus baris ini:
   ```html
   <div class="profile-picture">👤</div>
   ```
4. Uncomment baris ini:
   ```html
   <img src="profile.jpg" alt="Profile Picture" class="profile-picture">
   ```

**Cara 2: Pakai URL foto dari internet**
1. Upload foto ke image hosting (Imgur, Cloudinary, dll)
2. Copy URL foto
3. Ganti `src="profile.jpg"` dengan URL foto kamu:
   ```html
   <img src="https://example.com/your-photo.jpg" alt="Profile Picture" class="profile-picture">
   ```

### 3. Edit Link Social Media

Cukup ganti URL-nya, icon akan otomatis menyesuaikan!

```html
<a href="https://instagram.com/yourusername" target="_blank" class="link-button">
    <i data-lucide="instagram"></i>
    <span>Instagram</span>
</a>
```

**Supported platforms:**
- Instagram, GitHub, LinkedIn, Twitter/X
- Facebook, YouTube, TikTok
- Discord, Telegram, WhatsApp
- Spotify, Dribbble, Behance, Medium
- Dan lainnya (akan pakai icon link default)

### 4. Ganti Email

Edit file `index.html`, cari baris ini:

```html
<a href="mailto:your.email@example.com" class="link-button">
```

Ganti dengan email kamu:

```html
<a href="mailto:nama@email.com" class="link-button">
```

**Bonus: Tambah Subject & Body**

Bisa juga pre-fill subject dan body email:

```html
<a href="mailto:nama@email.com?subject=Hello!&body=Hi, I found your link tree!" class="link-button">
```

### 5. Edit Footer

Edit file `index.html`:

```html
<div class="footer">
    <p>Made with ❤️ by <a href="https://github.com/yourusername" target="_blank">@yourusername</a></p>
    <p>© 2024 All rights reserved</p>
</div>
```

## 🎨 Cara Kustomisasi Warna

Edit file `style.css`:

### Dark Mode Background
```css
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
```

### Light Mode Background
```css
background: linear-gradient(135deg, #fff5eb 0%, #ffe8d6 30%, #ffd4a3 60%, #ffb88c 100%);
```

### Profile Picture Gradient
```css
/* Dark Mode */
background: linear-gradient(135deg, #667eea, #764ba2);

/* Light Mode */
background: linear-gradient(135deg, #ff9a56, #ff6b35);
```

## 📁 Struktur File

```
.
├── index.html      # Struktur HTML
├── style.css       # Styling dan animasi
├── script.js       # JavaScript functions
├── profile.jpg     # Foto profile (upload sendiri)
└── README.md       # Dokumentasi
```

## 🛠️ Tech Stack

- HTML5
- CSS3 (Glassmorphism, Animations)
- Vanilla JavaScript
- Google Fonts (Poppins)
- Lucide Icons

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 License

Free to use for personal projects. Silakan modifikasi sesuai kebutuhan!

## 💡 Tips

- Gunakan foto profile dengan aspect ratio 1:1 (square)
- Ukuran foto optimal: 500x500px
- Format foto: JPG atau PNG
- Compress foto untuk loading lebih cepat
- Test di mobile sebelum deploy

## 🤝 Support

Kalau ada pertanyaan atau butuh bantuan, feel free to reach out!

---

Made with ❤️ and ☕
