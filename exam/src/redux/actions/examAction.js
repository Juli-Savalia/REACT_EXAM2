import {
  doc,
  addDoc,
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
  writeBatch,
} from "firebase/firestore";
import { app } from "../../firebaseconfig";

const db = getFirestore(app);

export const AddRecord = (d) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "examrec"), {
        name: d.name,
        email: d.email,
        password: d.password,
        city: d.city,
        salary: d.salary,
        designation: d.designation,
      });
      dispatch({
        type: "ADD_RECORD",
        payload: d,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const ViewRecord = (d) => {
  return async (dispatch) => {
    try {
      const data = collection(db, "examrec");
      const view = await getDocs(data);
      let u = view.docs.map((v) => ({
        id: v.id,
        ...v.data(),
      }));
      console.log(u);

      dispatch({
        type: "VIEW_RECORD",
        payload: u,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const DeleteRecord = (del) => {
  return async (dispatch) => {
    try {
      const delData = doc(db, "examrec", del);
      await deleteDoc(delData);
      alert("Records Deleted Successfully..");
      dispatch({
        type: "DELETE_RECORD",
        payload: del,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const EditRecord = (e) => {
  return async (dispatch) => {
    try {
      const editData = doc(db, "examrec", e.id);
      await updateDoc(editData, e.data);
      alert("Redirected TO Edit Page Successfully..");

      dispatch({
        type: "EDIT_RECORD",
        payload: e,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const MultipleDelete = () => {
  return async (dispatch) => {
    try {
      const batchs = writeBatch(db);
      let muldel = await getDocs(collection(db, "examrec"));

      muldel.docs.map((d) => {
        batchs.delete(doc(db, "examrec", d.id));
      });

      await batchs.commit();
      alert("Docs deleted successfully from database");
      let updatedrec = await getDocs(collection(db, "examrec"));
      let del = updatedrec.docs.map((val) => ({
        id: val.id,
        ...val.data(),
      }));

      dispatch({
        type: "MULTIPLE_DELETEREC",
        payload: del,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
