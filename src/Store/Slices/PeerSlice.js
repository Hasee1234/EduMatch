import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Config/firebase"; // Firestore import
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

// Async thunk: fetch all peers
export const fetchPeers = createAsyncThunk("peers/fetchPeers", async () => {
  const querySnapshot = await getDocs(collection(db, "peers"));
  let peers = [];
  querySnapshot.forEach((doc) => {
    peers.push({ id: doc.id, ...doc.data() });
  });
  return peers;
});

// Async thunk: fetch single peer by ID
export const fetchPeerById = createAsyncThunk("peers/fetchPeerById", async (id) => {
  const docRef = doc(db, "peers", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Peer not found");
  }
});

const peerSlice = createSlice({
  name: "peers",
  initialState: {
    peers: [],
    currentPeer: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    clearCurrentPeer: (state) => {
      state.currentPeer = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all peers
      .addCase(fetchPeers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPeers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.peers = action.payload;
      })
      .addCase(fetchPeers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Fetch single peer
      .addCase(fetchPeerById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPeerById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentPeer = action.payload;
      })
      .addCase(fetchPeerById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearCurrentPeer } = peerSlice.actions;

export default peerSlice.reducer;
