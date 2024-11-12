document.addEventListener("DOMContentLoaded", function(){
    const youtubeModals = [
        { // { TDS 1 }

        },
        { // { TDS 2 }

        },
        { // { TDS 3 }

        },
        { // { TDS 4 }

        },
        { // { TDS 5 }

        },
        { // { TDS 6 }
            modal1: "https://www.youtube.com/embed/az57Kav9XE8?si=43CLktJ7v86RYWIK",
            modal2: "https://www.youtube.com/embed/CbEhsMGNxVQ?si=a72womz7qieRPO1z",
            modal3: "https://drive.google.com/file/d/1xeWQE3RejfSqtQk_y4GFgUyjWyLX1qlP/preview",
            modal4: "https://www.youtube.com/embed/QVG_DN2X3U4?si=hY8KdPg1RIr1NDae",
            modal5: "https://www.youtube.com/embed/kQiJ1qM9OPg?si=i9jDa3yr7jn3QWub",
            modal6: "https://michaelbogota.github.io/adoc-page/PreparcionVideo.mp4",
            modal7: "https://www.youtube.com/embed/JiUk6EHBqow?si=9n3qZI0nZq-9cmcr",
            modal8: "https://www.youtube.com/embed/OUq7l4rKHm4?si=9x96GsQfPBRsWKJZ",
            modal9: "https://www.youtube.com/embed/RA2jspIL1cM?si=0CsjIvAi72QPbvzC",
            modal10: "https://www.youtube.com/embed/0gJK2C8toPY?si=24TBSWlpQT11U0Ix",
            modal11: "https://www.youtube.com/embed/0go8DyPO8Uw?si=2K1xr4jv7AIQHCjo",
            modal12: "https://www.youtube.com/embed/FEQ7TWzW-fo?si=OrSOm8mMNspq5wku"
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
