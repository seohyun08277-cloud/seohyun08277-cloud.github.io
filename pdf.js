// const pdfUrl = "../pdf/British-vogue-june-2021.pdf";

// let pdfDoc = null;
// let pageNum = 1;

// const canvas = document.getElementById("pdfCanvas");
// const ctx = canvas.getContext("2d");

// pdfjsLib.getDocument(url).promise.then(pdf => {

//   pdfDoc = pdf;
//   document.getElementById("pageCount").textContent = pdf.numPages;

//   renderPage(pageNum);

// });

// function renderPage(num){

//   pdfDoc.getPage(num).then(page => {

//     const viewport = page.getViewport({scale:1.5});

//     canvas.height = viewport.height;
//     canvas.width = viewport.width;

//     page.render({
//       canvasContext: ctx,
//       viewport: viewport
//     });

//     document.getElementById("pageNum").textContent = num;

//   });

// }

// document.getElementById("prevPage").onclick = () => {

//   if(pageNum <= 1) return;

//   pageNum--;
//   renderPage(pageNum);

// };

// document.getElementById("nextPage").onclick = () => {

//   if(pageNum >= pdfDoc.numPages) return;

//   pageNum++;
//   renderPage(pageNum);

// };