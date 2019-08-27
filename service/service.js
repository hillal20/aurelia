import axios from "axios";

class Service {
  constructor() {
    this.data = [];
    this.err = "";
    this.tags = ["tag1", "tag2", "tag3"];
  }
  // pc = new RTCPeerConnection(null);

  fetchingData() {
    const promise = axios.get("http://localhost:8000/data");
    return promise;
  }
  createTag(tag) {
    this.tags.push(tag);
  }
}
export default Service;
