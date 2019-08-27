import Service from "../../../service/service";
import { inject } from "aurelia-framework";

@inject(Service)
class User {
  constructor(Service) {
    this.service = Service;
    this.constrains = { video: true };
  }
  //   attached() {
  //     this.element = document.querySelector(".video");
  //     this.remoteElement = document.querySelector(".remoteVideo");
  //     ///////////////////////////////////////////////////
  //     let pcConfig = null;
  //     // this.pc = new RTCPeerConnection(pcConfig);
  //     this.createOffer(this.service.pc);
  //     console.log("pc ===> ", this.service.pc);
  //     ////////////////////////////////////////
  //     this.service.pc.onicecandidate = e => {
  //       if (e.candidate) {
  //         console.log("ice candidate ====> ", JSON.stringify(e.candidate));
  //       }
  //     };
  //     this.service.pc.oniceconnectionstatechange = e => {
  //       console.log("on ice connection  ===> ", e);
  //     };
  //     this.service.pc.onaddstream = e => {
  //       this.remoteElement.srcObject = e.stream;
  //     };
  //     // /////////////////////////////////

  //     navigator.mediaDevices
  //       .getUserMedia(this.constrains)
  //       .then(response => {
  //         this.success(response);
  //       })
  //       .catch(err => {
  //         this.failure(err);
  //       });
  //   }

  //   ////////////////////////////////
  activate(params) {
    this.service.fetchingData().then(msg => {
      this.data = msg.data.data;

      this.user = this.data.filter(user => {
        return user.slug === parseInt(params.slug);
      })[0];
    });
  }
  //   //////////////////////////////////
  //   success(stream) {
  //     window.localStream = stream;
  //     this.element.srcObject = stream;
  //     this.service.pc.addStream(stream);
  //   }
  //   /////////////////////////////
  //   failure(error) {
  //     console.log("getUserMedia error ===> ", error);
  //   }

  //   ///////////////////////
  //   createOffer() {
  //     alert("create offer ");
  //     const service = this.service;
  //     this.service.pc.createOffer({ offerToReceiveVideo: 1 }).then(sdp => {
  //       console.log("sdp ==> ", JSON.stringify(sdp));
  //       service.pc.setLocalDescription(sdp);
  //     });
  //   }
  //   ///////////////////////////
  //   setRemoteDescription() {
  //     const textArea = document.querySelector(".textArea");
  //     const message = JSON.stringify(textArea.value);
  //     this.service.pc.setRemoteDescription(new RTCSessionDescription(message));
  //   }
  //   ////////////////////////
  //   addCandidate() {
  //     const textArea = document.querySelector(".textArea");
  //     const message = JSON.stringify(textArea.value);
  //     this.service.pc.addIceCandidate(new RTCIceCandidate(message));
  //   }
  //   offer() {
  //     alert("offer");
  //   }
}
export default User;
