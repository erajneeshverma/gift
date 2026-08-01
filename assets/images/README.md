# 📸 Photos Folder — Rajnish ❤️ Khushi

Add your photos here! Below is the list of **expected image filenames** used across all pages of the website.
Just name your files accordingly and drop them in this folder — they will automatically appear on the website.

---

## 🏠 Home Page (`index.html`)

| Filename | Where it's used | Recommended size |
|----------|-----------------|------------------|
| `about.jpg` | About section photo | 640×760 px |
| `hero-bg.jpg` | *(Optional)* Hero background overlay | 1920×1080 px |

---

## 📖 Our Story Page (`our-story.html`)

| Filename | Where it's used | Recommended size |
|----------|-----------------|------------------|
| `story-intro.jpg` | Introduction section | 560×640 px |
| `timeline1.jpg` | Timeline — "The Day We Met" | 480×360 px |
| `timeline2.jpg` | Timeline — "Getting to Know You" | 480×360 px |
| `timeline3.jpg` | Timeline — "Falling for You" | 480×360 px |
| `timeline4.jpg` | Timeline — "Us, Together" | 480×360 px |

---

## 📸 Gallery Page (`gallery.html`)

| Filename | Where it's used |
|----------|-----------------|
| `gallery1.jpg` | Featured large photo |
| `gallery2.jpg` | Grid photo 2 |
| `gallery3.jpg` | Grid photo 3 |
| `gallery4.jpg` | Grid photo 4 (tall) |
| `gallery5.jpg` | Grid photo 5 |
| `gallery6.jpg` | Grid photo 6 (wide) |
| `gallery7.jpg` | Grid photo 7 |
| `gallery8.jpg` | Grid photo 8 |
| `gallery9.jpg` | Grid photo 9 (large) |
| `gallery10.jpg` | Grid photo 10 |
| `gallery11.jpg` | Grid photo 11 |
| `gallery12.jpg` | Grid photo 12 (tall) |

---

## 🌸 Memories Page (`memories.html`)

| Filename | Where it's used |
|----------|-----------------|
| `memory1.jpg` | Scrapbook card 1 |
| `memory2.jpg` | Scrapbook card 2 |
| `memory3.jpg` | Scrapbook card 3 (wide) |
| `memory4.jpg` | Scrapbook card 4 |
| `memory5.jpg` | Scrapbook card 5 |
| `final.jpg` | Final message section photo |

---

## ✅ How to Enable Photos

Once you've added your photos, open the relevant HTML file and:

1. **Find the placeholder div** that looks like this:
   ```html
   <div class="photo-placeholder" style="...">
     <span class="ph-icon">💕</span>
     <p><code>assets/images/gallery1.jpg</code></p>
   </div>
   ```

2. **Delete** the placeholder div above it.

3. **Uncomment** the image tag below it:
   ```html
   <!-- <img src="assets/images/gallery1.jpg" alt="..."> -->
   ```
   → becomes:
   ```html
   <img src="assets/images/gallery1.jpg" alt="Rajnish & Khushi">
   ```

---

## 💡 Tips

- Photos can be **JPG, PNG, or WebP** format
- Try to use portrait orientation (taller than wide) for timeline and about sections
- Landscape photos work best for the gallery grid
- File names are **case-sensitive** — use exactly the names listed above

---

Made with ❤️ by Rajnish Kumar Verma for Khushi Kumari 🌸
