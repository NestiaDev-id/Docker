import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Periksa apakah request body memiliki title, author, dan publishYear
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Gagal mengirimkan required: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).send({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Menggunakan findById untuk mencari buku berdasarkan id
    const book = await Book.findById(id);

    // Jika buku tidak ditemukan, kembalikan respons 404
    if (!book) {
      return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    // Kembalikan buku dalam respons JSON
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
});

// ubah/update book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Gagal mengirimkan required: title, author, publishYear",
      });
    }

    const { id } = req.params;
    const { title } = req.body;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    return res.status(200).send({ message: `Buku ${title} berhasil diupdate` });
  } catch (error) {
    res.status(500).send({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Buku tidak ditemukan" });
    }
    return res.status(200).send({ message: `Buku berhasil dihapus` });
  } catch (error) {
    res.status(500).send({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
});

export default router;
