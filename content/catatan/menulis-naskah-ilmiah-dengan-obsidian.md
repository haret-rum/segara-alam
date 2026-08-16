---
title: Menulis Naskah Ilmiah dengan Obsidian
description: Dalam satu tahun terakhir, saya mengerjakan setiap urusan tulis menulis dan catat mencatat di Obsidian. Mulai dari menulis esai, makalah, catatan harian, catatan literatur, catatan kelas, outline, tugas sehari-hari, daftar buku yang ingin dibaca, daftar buku yang selesai dibaca, daftar kebutuhan rumah, dan lain-lain.
permalink: menulis-naskah-ilmiah-dengan-obsidian
aliases: []
tags: [obsidian]
socialImage:
socialDescription:
date: 2026-08-16
publish: true
---

Dalam satu tahun terakhir, saya mengerjakan setiap urusan tulis menulis dan catat mencatat di Obsidian. Mulai dari menulis esai, makalah, catatan harian, catatan literatur, catatan kelas, outline, tugas sehari-hari, daftar buku yang ingin dibaca, daftar buku yang selesai dibaca, daftar kebutuhan rumah, dan lain-lain. 

Tentu sebenarnya saya bisa dan mungkin-mungkin saja mengerjakan berbagai tulisan dan catatan itu di aplikasi terpisah. Misal, esai dan makalah di Libre Office atau MS Word, catatan di Obsidian, daftar tugas dan kebutuhan di *note-app* android. Tapi itu akan membuat saya malas. Bukan malas bergerak, tetapi malas menunggu layar laptop dan hape saya mengular-ular membuka aplikasi itu. 

Sebelumnya, saya menulis makalah dan esai di Libre Office. Saya pertama harus membuka Libre Office. Kedua, saya harus membuka catatan saya di Obsidian. Ketiga, karena saya membutuhkan akses internet, saya juga harus membuka Firefox. Keempat, karena saya akan sering mengutip referensi, saya harus membuka Zotero di mana sumber-sumber kepustakaan yang saya butuhkan saya taruh di sana semua. Ada empat aplikasi yang harus dibuka dalam waktu bersamaan. Ini akan menciptakan jeda buat saya di awal selama beberapa menit menunggu semua aplikasi ini terbuka. Dan ketika tiba waktunya menulis, sering laptop saya tiba-tiba *nge-lag* saking banyaknya aplikasi yang baru saya jalankan. Maklum, laptop ber-RAM 4 ini saya beli sejak tahun 2016.

Pada akhirnya saya mencari berbagai cara agar semua itu bisa saya kerjakan cukup di Obsidian saja. Saya membutuhkan plugin-plugin yang memungkinkan saya untuk melakukan itu. mula-mula saya telusuri forum reddit, dan mereka mengarahkan untuk install beberapa plugin dari Community Plugin. Community Plugin adalah database yang memungkinkan siapa pun untuk menambahkan plugin yang bisa diinstall oleh orang lain. Bisa diakses dengan `Settings` → `Community Plugins` → `Browse`. Plugin-plugin yang ditambahkan komunitas ini memungkinkan Obsidian melakukan kerja-kerja lintas fungsi yang pada dasarnya tidak bisa dikerjakan Obsidian, termasuk apa yang menjadi masalah saya tadi. 

Tentu dengan saya menginstall plugin, Obsidian saya akan jadi Obsidian versi yang sudah dibonsai. Saya dapat dengan mudah menemukan solusi untuk masalah tadi, karena saking banyaknya opsi-opsi yang tersedia agar Obsidian di laptop saya bisa melakukan semua pekerjaan yang saya butuhkan. Namun saya harus mempelajari cara kerja dari hal-hal tersebut, meskipun itu bersifat teknis dan mendasar. Dari Youtube, laman-laman tutorial, dan tentu, bertanya kepada AI. Untuk membiasakannya juga butuh beberapa hari. Saya ingin berbagi beberapa tips bagaimana saya memecahkan masalah saya tadi itu, khususnya dalam hal menulis sitasi di Obsidian.

Pertama siapkan dulu beberapa bahan masak kita: 

1. Plugin [Pandocit](https://community.obsidian.md/plugins/pandocit) di Obsidian Community Plugins
2. [Zotero](https://www.zotero.org/)
3. Plugin [Better Bibtex](https://github.com/retorquere/zotero-better-bibtex/releases) di Zotero

## Menulis di Obsidian 

Menulis di Obsidian tentu saja sangat mungkin. Saya menulis draf kotor biasanya di situ. Saya menulis catatan-catatan yang terpisah-pisah juga di situ. 

Tentu pada awalnya tidak terlalu nyaman, terutama dalam hal ngetiknya, karena saya harus membiasakan menulis dalam [sistem markdown](https://obsidian.md/help/syntax). Menulis dengan sistem markdown berbeda dengan sistem richtext yang biasa digunakan di LibreOffice, Ms Word, WPS, dsb. Di Markdown, menulis lebih cair dan fleksibel. Untuk membuat judul saya tinggal menambah `#` di awal alinea untuk heading satu dan lebih banyak `#` untuk seterusnya.

```md
# heading 1
## heading 2
### heading 3
#### heading 4
##### heading 5
###### heading 6
```

Kemudian untuk bold dan italic saya harus mengetiknya dengan `**bold**` menjadi **bold**, `*italic*` menjadi *italic* dan `~~strikethrough~~` menjadi ~~strikethrough~~ untuk kata bercoret. Meskipun di awal terdengar merepotkan, namun semakin terbiasa justru ini memudahkan. Saya juga bisa menambahkan rumus matematika di Obsidian. Misalnya rumus tingkat keuntungan dalam Das Kapital bisa ditulis begini:

```md
$$r=\frac{s}{c+v}$$
```

menjadi:

$$r=\frac{s}{c+v}$$

Lalu saya harus mempelajari frontmatter. Buat apa? Saya dulu pertama kali sempat bertanya begitu. Tapi ternyata ini bagian yang kelak memudahkan saya. Misal, saya bisa menambahkan tagar di makalah saya tanpa harus saya tuliskan tagar tersebut di badan tulisan. Sebagai contoh, frontmatter bisa dipanggil dengan shortcut `ctrl + ;` atau dituliskan begini di bagian paling awal markdown: 

```md
---
title: Turats Menurut Muruwwah
alias: Turats Revolusioner Muruwwah
author: Segara Alam
date: 2026-08-16
tags: #turats #muruwwah 
---
```

Saya bisa memanggil makalah saya itu, untuk keperluan menghubungkannya dengan catatan misalnya, dengan nama yang tertera pada title atau alias. Semua sama saja. Saya juga dapat melihat makalah saya ketika saya melakukan pencarian `#turats`. 

Untuk akses internet, saya juga tidak perlu repot membuka Firefox di laptop saya. Karena, ternyata Obsidian desktop beberapa bulan lalu telah menyediakan fitur bawaan *Web Viewer*, yang bisa diaktifkan melalui `Settings` → `Core Plugins` → `Web Viewer`. 

## Pengutipan/Sitasi di Obsidian

Yang terakhir adalah masalah sitasi. Agar saya bisa mengutip atau mensitasi, pertama saya harus punya aplikasi Zotero dan login akun.

Kemudian di Obsidian saya hanya cukup menginstall plugin [Pandocit](https://community.obsidian.md/plugins/pandocit). Yaitu sebuah plugin yang memungkinkan Obsidian berkomunikasi dengan Zotero dan memungkinkan kita untuk menulis penulisan sitasi dengan *pandoc-style*. 

Apa yang dimaksud dengan penulisan sitasi dengan *pandoc-style*? 

Ini merujuk ke persoalan teknis saja dalam penulisannya di markdown. Teknik ini menurut saya kira lebih mudah dan ringkas daripada menggunakan LibreOffice dan Zotero. Dengan cara lama, saya harus memanggil dialog box Zotero terlebih dahulu. Namun, dengan *pandoc-style* saya bisa menulis pengutipan dengan cara mengetik `[@` dan nanti akan keluar opsi-opsinya. 

![[image-17.png]]

`[@muruwwah2021]` hasil rendering tampilannya akan seperti ini, (Muruwwah, 2021). 

Untuk mengutip halaman tinggal berikan koma dan nomor halaman. Misalnya, `[muruwwah2021, 120-123]` hasil rendering tampilannya akan menjadi (Muruwwah, 2021: 120-23)

Untuk mengutip dua referensi dapat ditambahkan titik koma atau `;` setelah referensi pertama. Misalnya, `[@muruwwah2021, 120-123; amel2001, 40]` hasil rendering tampilannya menjadi (Muruwwah, 2021: 120-23; Amel, 2001: 40)

Hal ini bisa saya lakukan di Obsidian tanpa saya perlu menjalankan Aplikasi Zotero di laptop saya. 

Lantas bagaimana komunikasi Obsidian dengan Zotero sehingga memungkinkan untuk melakukan sitasi dengan *pandoc-style*? 

Hal ini menjadi mungkin dengan saya menginput data CSL JSON, yang merupakan file hasil ekspor dari seluruh sumber kepustakaan saya di Zotero, ke Pandocit. Dengan CSL JSON Obsidian dapat melakukan komunikasi dengan Zotero. Ini yang saya terapkan di laptop. Namun pandocit menyediakan alternatif komunikasi lain. Yaitu dengan membuat Zotero API key dan memasukkannya di plugin pandocit. Jika sebelumnya di hape komunikasi itu tidak mungkin karena Android tidak mampu membaca CSL JSON, sekarang itu menjadi mungkin karena database sumber kepustakaan tidak diangkut dari CSL JSON, tetapi diangkut dari Zotero Web via API key. 

Bagaimana cara mengekspor database referensi ke CSL JSON?

Yaitu dengan Plugin Better Bibtex di Zotero. Plugin BetterBibtex memungkinkan saya untuk melakukan ekspor CSL JSON, tapi database yang dikandungnya tetap update ketika saya melakukan semua perubahan di Zotero. Misal, saya mengganti tahun buku Muruwwah tadi di Zotero. Perubahan yang barusan saya lakukan akan tersinkron di CSL JSON. 

> [!tip] 
> Untuk menginstall Better Bibtex:
> 1. Unduh paket Better Bibtex di [sini](https://github.com/retorquere/zotero-better-bibtex/releases)
> 2. Buka Zotero, pilih menu `Tools` → `Plugins`
> 3. Tekan simbol gir di kanan atas dan pilih `Install Plugin From File...`
> 4. Muncul dialog *pop-up* Explorer, pilih file `.xpi` yang barusan diunduh

Ini tadi jika di Laptop. Adapun di hape, saya mensettingnya hanya cukup dengan memasukkan Zotero API key.

> [!TIP]
> Untuk menambahkan API key Zotero bisa dengan cara berikut:
> 1. Masuk ke akun Zotero via browser
> 2. Buka [tautan ini](https://www.zotero.org/settings/keys)
> 3. Pilih `Create a New Key` dan izinkan Read/Write Access
> 4. Key akan muncul dan bisa disimpan untuk dimasukkan ke plugin Pandocit

## Konfigurasi Pandocit

- Tekan Download WASM dan Download PDF Worker sampai muncul notifikasi berhasil, kemudian restart Obsidian. 
- Jika menggunakan CSL JSON sebagai piranti komunikasi Zotero, tekan simbol folder dan pilih CSL JSON yang baru saja diekspor dari Obsidian. Adapun jika menggunakan Zotero API key, bisa masukkan kode key yang sudah disimpan tadi. Pilih salah satu saja cukup.
- Pilih Citation Style. Di sini saya menggunakan APA 7th.

![[Clip_15349.png]]

- Citation Style Language, pilih Indonesia. 
- Aktifkan opsi-opsi sebagaimana gambar di bawah.

![[image-19.png]]

SELESAI!!!

Selamat menulis!