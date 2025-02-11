import mongoose from "mongoose";

// Mendefinisikan schema untuk model buku
const bookSchema = mongoose.Schema(
  {
    // Field untuk judul buku, bertipe String dan wajib diisi
    title: {
      type: String,
      require: true,
    },
    // Field untuk penulis buku, bertipe String dan wajib diisi
    author: {
      type: String,
      require: true,
    },
    // Field untuk tahun publikasi buku, bertipe Number dan wajib diisi
    publishYear: {
      type: Number,
      require: true,
    },
  },
  {
    // Menambahkan timestamps (createdAt dan updatedAt)
    timestamps: true,
  }
);

// Membuat model "Book" berdasarkan schema yang telah didefinisikan
export const Book = mongoose.model("Book", bookSchema);
