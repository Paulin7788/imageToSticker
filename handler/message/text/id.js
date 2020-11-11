exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas sticker yang anda buat dari bot ini serta video, gambar maupun data lainnya yang anda dapatkan dari Source code / bot ini.
- Source code / bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

Source Code BOT : https://github.com/YogaSakti/imageToSticker
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

Best regards, Yoga Sakti.`
}

exports.textMenu = (pushname) => {
    return `
Eae, ${pushname} seu arrombado! 👋️
Alguns comandos que o bot do pai faz!✨

Criador de figurinha:
1. *#sticker*
Pra transformar a foto em figurinha. 
Use: Envie uma imagem com legenda ou responda uma com #sticker

2. *#sticker* _<Url Gambar>_
Para mudar a imagem de url para adesivo.
Usar: *#sticker* _<Url>_

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
Para transformar um GIF em uma figruinha animada(somente Giphy.com)
Uso: enviar mensagens em formato *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_

4. *#memesticker* _<teks superior>_ | _<teks inferior>_
Para fazer um meme de adesivo com texto superior e inferior
Uso: enviar fotos com legendas: envie uma foto com a legenda #meme <teks superior>_ | _<teks inferior>, ou você também pode responder a uma imagem existente

Downloader:
1. *#tiktok* _<tiktok url>_
Pra baixar os videos dessa merda de tique teko.
Uso: neste seguinte formato *#tiktok _<tiktok url>_

2. *#fb* _<post/video url>_
Para baixar videos do Facebook(perae tu e um veio?).
Uso: neste seguinte formato *#fb https://www.facebook.com/.....*

3. *#ig* _<instagram post url>_
Para baixar videos do instagram.
Uso: neste seguinte formato *#ig https://www.instagram.com/*

4. *#twt* _<twitter post url>_
Para baixar videos do Twitter(perae tem militante usando meu bot?).
Uso:Este seguinte formato *#twt https://twitter.com/*
    
Outros comandos:
1. *#translate* _<kode bahasa>_
Para traduzir mensagens no idioma especifado.
Usar: Responda / cite / responda a mensagem com a qual deseja traduzir _*#translate id*_ <- 
id é o código do idioma.o código da linguagem pode ser visto em *https://bit.ly/33FVldE*

2. *#resi* _<kurir>_ _<nomer resi>_
Para verificar o status de entrega de mercadorias, lista de mensageiros: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Usar: enviar mensagens com o formato _*#resi jne 1238757632*_

3. *#meme* _<teks atas>_ | _<teks bawah>_
Para criar um meme com texto superior e inferior
Usar: enviar fotos com legendas _*#meme em cima | em baixo*_, ou você também pode responder a uma imagem existente.

4. *#ceklokasi*
Verifique a localização da propagação de covid-19 na área ao seu redor (sub distrito).
Usar: envie a sua localização e, em seguida, responda / cite / responda à localização que enviou com _*#ceklokasi*_

5. *#tnc*
Exibe os termos e condições do bot.

6. *#donasi*
exibir informações de doação.

Se hoje foi ruim amanha vai ser pior!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah beberapa fitur admin grup yang ada pada bot ini!

1. *#kick* @user
Untuk mengeluarkan member dari grup (bisa lebih dari 1).

2. *#promote* @user
Untuk mempromosikan member menjadi Admin grup.

3. *#demote* @user
Untuk demosikan Admin grup.

4. *#tagall*
Untuk mention semua member grup. (Premium Only)

5. *#del*
Untuk menghapus pesan bot (balas pesan bot dengan #del)`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi melalui link berikut:
1. Saweria: https://saweria.co/yogasakti
2. Trakteer: https://trakteer.id/red-emperor 

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
