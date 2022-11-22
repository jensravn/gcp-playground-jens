import { Firestore } from "@google-cloud/firestore";

export type FirestoreProduct = {
  id: string;
  startDate: FirebaseFirestore.Timestamp;
  name: string;
  endDate: FirebaseFirestore.Timestamp;
};

const collectionPath = "product";

const productRepo = {
  async add() {
    const firestore = new Firestore();
    const collectionReference = firestore.collection(collectionPath);
    const data = {};
    await collectionReference.add(data);
  },

  async getAll() {
    const firestore = new Firestore();
    const collectionReference = firestore.collection("product");
    const productDocuments = await collectionReference.get();
    const productDocumentData = productDocuments.docs
      .map((doc) => doc.data() as FirestoreProduct)
      .map((data) => ({
        id: data.id,
        name: data.name,
        startDate: data.startDate.toDate(),
        endDate: data.endDate.toDate(),
      }));
    return productDocumentData;
  },
};

export default productRepo;
