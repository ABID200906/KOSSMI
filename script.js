// Fungsi untuk menampilkan section dan memberi efek aktif pada tombol
function showSection(sectionId) {
    // Tampilkan section yang dipilih
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("visible");
    });
    document.getElementById(sectionId).classList.add("visible");
  
    // Tandai tombol aktif
    document.querySelectorAll(".nav-item").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.querySelector(nav-item[onclick="showSection('${sectionId}')"]).classList.add("active");
  
    // Generate QRIS saat membuka menu pembayaran
    if (sectionId === "payment") {
      generateQRIS();
    }
  }
  
  // Fungsi generate QRIS
  function generateQRIS() {
    const paymentUrl = "https://qr.dana.id/v1/281012092025011470771860"; // Ganti dengan URL sistem QRIS Anda
    const qrContainer = document.getElementById("qris-container");
  
    // Hapus QR sebelumnya jika ada
    qrContainer.innerHTML = "";
  
    // Generate QR menggunakan library QRCode.js
    QRCode.toCanvas(qrContainer, paymentUrl, {
      width: 200,
      margin: 2,
      color: {
        dark: "#005BAC",
        light: "#FFFFFF",
      },
    });
  }
  
  // Initialize Google Maps
  function initMap() {
    const mapOptions = {
      center: { lat: -6.200000, lng: 106.816666 }, // Example: Jakarta
      zoom: 12,
    };
  
    new google.maps.Map(document.getElementById("mapContainer"), mapOptions);
  }
  
  // Initialize the app
  window.onload = () => {
    initMap();
  };
  