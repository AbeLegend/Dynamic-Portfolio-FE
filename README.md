# Dynamic Portfolio Front End

Untuk menjalankan website ini dapat akses halaman [Dynamic Portfolio FE](https://dynamic-portfolio-fe-mfikriab.vercel.app/)

Tech Stack yang digunakan sebagai berikut:

- NextJS (Typescript)
- Sanity (Typescript)

Untuk schema nya sebagai berikut:

_[key]: type_

```
imageCover  : image
image       : image
name        : string
description : text
portfolio   : Array of Object
            position    : string
            company     : string
            startDate   : date
            endDate     : date
            description : text
```

Agar bisa melihat lebih jelas saya membuat schema nya pada project sanity. Anda dapat akses github tersebut [Dynamic-Portfolio-BE](https://github.com/AbeLegend/Dynamic-Portfolio-BE)

## Penambahan Design

1. Menambahkan Navbar agar mudah melakukan navigasi
2. Terdapat informasi nama halaman, nama, dan foto pada navbar agar navbar tidak terlalu kosong
3. Terdapat Footer untuk copyright
4. Menambahkan animasi loading ketika button simpan di klik, agar webiste lebih interaktif
5. Menambahkan animasi skeleton loading pada image dan imageCover jika server masih loading
6. Menambahkan animasi minimize dan maximize untuk form edit portfolio
7. Menambahkan sidebar jika dibuka di device mobile, agar navbar tidak terlihat sempit
