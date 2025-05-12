document.addEventListener("DOMContentLoaded", function(){
    const youtubeModals = [
        { // { TDS 1 }
            modal1: "https://www.youtube.com/embed/-OQIJThpId4?si=7ig65iVXrJ9liq44",
            modal2: "https://www.youtube.com/embed/LS3M0xJ6ZFM?si=jz5qsrCzUvpjlb1X",
            modal3: "https://youtube.com/shorts/Zpfd0gm8QzM?si=zwVEOaReXs5UBbag",
            modal4: "https://www.youtube.com/embed/zxIvoqD4gmw?si=PXr4p0YsYhK7MNZn",
        },
        { // { TDS 2 }
            modal1: "https://www.youtube.com/embed/X0zKQ14ZwGI?si=7T1p_UV10sRFZ1xo",
            modal2: "https://www.youtube.com/embed/cdjT2CsyBh0?si=xOEhneg1omTCBJRJ",
            modal3: "https://www.youtube.com/embed/Qw_1CxXm6ZY?si=0rU0PsHK64Z5LFyU",
            modal4: "https://www.youtube.com/embed/O_4NrYCWL_Q?si=Lpim07KV_Zg6dFdm",
            modal5: "https://www.youtube.com/embed/WbGbmGW45U0?si=PqtcdsHPrMNsLY9q",
            modal6: "https://www.youtube.com/embed/_k9zKF6v8YA?si=3hQuVkLOd7eSMwtk",
            modal7: "https://www.youtube.com/embed/NM0dxXqlv74?si=cc8CU4cb--qwlN5u",
            modal8: "https://drive.google.com/file/d/1mhGm3kUDYMLiZyLqkEGNQcnEcWmzCtTr/preview"

        },
        { // { TDS 3 }
            modal1: "https://www.youtube.com/embed/22q6pZJb5KE?si=_98Ez6cX-9gxZ2Z_",
            modal2: "https://drive.google.com/file/d/15E8zK_nxFCN8tlNhy5A_Got4_5d4blH1/preview",
            modal3: "https://www.youtube.com/embed/1Q58XUVZ6YE?si=ef-zdhrm5BqByIVi",
            modal4: "https://www.youtube.com/embed/8t41IBHIpXo?si=JSse_9UYXLRYEKm5",
            modal5: "https://www.youtube.com/embed/oyN8IWOUmsE?si=QplThvJ1hSdaVJp4",
            modal6: "https://www.youtube.com/embed/BiTWio8yyPs?si=HigdC8zj-jrZOyf5",
            modal7: "https://www.youtube.com/embed/P28-4Icbv5k?si=Ueg3G7WMMAoblOUr",
            modal8: "",
            modal9: "https://www.youtube.com/embed/yhOYRzjH2iI?si=tyzM6ShykDDt0-N7",
            modal10: ""

        },
        { // { TDS 4 }
            modal2: "https://drive.google.com/file/d/1CHL9VhSqImUDoKC68ePeV9jYQDJAYAtR/preview",
            modal3: "https://drive.google.com/file/d/1D90zGrHyGeGSyvW_3wvYl6y_qQkYaPLq/preview",
            modal4: "https://www.youtube.com/embed/pduw3PlFMDI?si=KN34XPA8vel64yul",
            modal5: "https://mateonaranjo.github.io/ArcData_/img/pitch%20proyecto.mp4",
            modal6: "https://www.youtube.com/embed/C1qEQOyne8A?si=TpQntL5BCDGoaJS-",
            modal8: "https://drive.google.com/file/d/1nY690owX_dgwABDyIGGYX27l0yBKXoki/preview",
            modal9: "",
            modal10: "https://www.youtube.com/embed/AnS2guMmKh8?si=nVcnrftPFV-tZFqu"
           
        },
        { // { TDS 5 }
            modal1: "https://www.youtube.com/embed/jbhPwyKNMsQ?si=hB7pzcCkzrtzJoV",
            modal2: "https://www.youtube.com/embed/JFzOy9EiQww?si=HmJ7pXx6Hn3L1uZs",
            modal3: "https://www.youtube.com/embed/qeKz-i_E3u4?si=QPXAribHpCIdl-jz",
            modal4: "https://www.youtube.com/embed/BF0PMa5ALdk?si=Kc3PFxn7wKeMr2Vg",
            modal5: "https://www.youtube.com/embed/MWbpwJ5I9XM?si=S8NS0Q5gokWgXVx0",
            modal6: "https://drive.google.com/file/d/1I03iyRqtAo7sR2tXenNpnbhJ0b02pekq/preview",
            modal7: "https://www.youtube.com/embed/daWmVPkXR18?si=9MV6uOiEdIX5sQj3",
            modal8: "https://www.youtube.com/embed/Z1C3ZORzfDo?si=7aQltsiluQ3Q1VfU",
            modal9: "https://www.youtube.com/embed/j00xCv04QGI?si=rw6x4mJz0QMCFTDX",
            modal10: "https://www.youtube.com/embed/arFqggi2hnY?si=Q0ILKbTrwILIQaFv"
           
        },
        { // { TDS 6 }
            modal1: "https://www.youtube.com/embed/AiaCSv3bAm8?si=jL3zhg0vrPqu3U2_",
            modal2: "https://www.youtube.com/embed/sYm0mJgFVV8?si=Dv8cVQufm48JRF4r",
            modal3: "https://youtube.com/shorts/xIZwj_pRxpc?si=bLOsi8ySYylfrm_D",
            modal4: "https://www.youtube.com/embed/5YHhqZae3XA?si=V515dV9fXteRN1ar"
        }
    ];

    function identifyWindow(){
        const page = window.location.pathname.split("/").pop();
        if (page == "tds-s1.html") {
            return 0;
        } else if (page == "tds-s2.html") {
            return 1;
        } else if (page == "tds-s3.html") {
            return 2;
        } else if (page == "tds-s4.html") {
            return 3;
        } else if (page == "tds-s5.html") {
            return 4;
        } else if (page == "tds-s6.html") {
            return 5;
        }
    }

    function addYoutubeIframe(modalId) {
        const container = document.getElementById(`youtube-container-${modalId}`);
        const url = youtubeModals[identifyWindow()][modalId];
        
        if (container && url) {
            if(url.includes("drive")){
                container.innerHTML = `<iframe src="${url}" width="640" height="480" allow="autoplay"></iframe>`;
            }
            container.innerHTML = `<iframe width="560" height="315" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        }
    }

    function removeYoutubeIframe(modalId) {
        const container = document.getElementById(`youtube-container-${modalId}`);
        if (container) {
            container.innerHTML = "";
        }
    }

    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("show.bs.modal", function (event) {
            const modalId = event.target.id;
            addYoutubeIframe(modalId);
        });

        modal.addEventListener("hidden.bs.modal", function (event) {
            const modalId = event.target.id;
            removeYoutubeIframe(modalId);
        });
    });
});
