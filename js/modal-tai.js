document.addEventListener("DOMContentLoaded", function(){
    const youtubeModals = [
        { // { TAI 1 }
            modal1: "https://www.youtube.com/embed/Qw_1CxXm6ZY?si=0rU0PsHK64Z5LFyU",
            modal2: "https://www.youtube.com/embed/sP1Fe2KoTCI?si=ccg6sqiHo4guJ_SW",
            modal3: "https://www.youtube.com/embed/Uorg1Z-CCTM?si=-dgQRKbO8MxPIvw9",
            modal4: "https://www.youtube.com/embed/SkSUmP_NKuU?si=oYn_EvZur6gm8mEc",
            modal5: "https://www.youtube.com/embed/O_4NrYCWL_Q?si=Lpim07KV_Zg6dFdm",
            modal6: "https://www.youtube.com/embed/3JvkqC3mMDg?si=QzhTAulld2nKv6N8"
        },
        { // { TAI 2 }

        },
        { // { TAI 3 }

        },
        { // { TAI 4 }

        },
        { // { TAI 5 }

        },
        { // { TAI 6 }
            
        }
    ];

    function identifyWindow(){
        const page = window.location.pathname.split("/").pop();
        if (page == "tai-s1.html") {
            return 0;
        } else if (page == "tai-s2.html") {
            return 1;
        } else if (page == "tai-s3.html") {
            return 2;
        } else if (page == "tai-s4.html") {
            return 3;
        } else if (page == "tai-s5.html") {
            return 4;
        } else if (page == "tai-s6.html") {
            return 5;
        }
    }

    function addYoutubeIframe(modalId) {
        const container = document.getElementById(`youtube-container-${modalId}`);
        const url = youtubeModals[identifyWindow()][modalId];
        
        if (container && url) {
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
