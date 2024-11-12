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
            modal1: "https://www.youtube.com/embed/1FvusBCVfvs?si=uUjjKrg4iTkrcLpG",
            modal2: "https://www.youtube.com/embed/22q6pZJb5KE?si=qBCR02LxGOcj7d3j",
            modal3: "https://drive.google.com/file/d/10DS63ysPgO_XMaO0jsqdMobsIB4IzBag/preview",
            modal4: "https://www.youtube.com/embed/hHfB8FRM_fo?si=rldn0WnBl7t8zCR2",
            modal5: "https://www.youtube.com/embed/8t41IBHIpXo?si=JSse_9UYXLRYEKm5",
            modal6: "https://www.youtube.com/embed/9l2pWynFar8?si=Me8o8B_UZU06FU8P"
        },
        { // { TAI 3 }
            modal1: "https://www.youtube.com/embed/XjF6AMd-RJw?si=YCohWLpGIYP9LjrP",
            modal2: "https://www.youtube.com/embed/5K_6LHrPRVk?si=I_lMSUl83cmi0WXB",
            modal3: "https://www.youtube.com/embed/sPXcqsjQpJo?si=rVzGD9ttsrQMde5j"
        },
        { // { TAI 4 }
            modal1: "https://www.youtube.com/embed/z3laB54ggFk?si=RlG-WYKVBS28elYC"
        },
        { // { TAI 5 }
            modal1: "https://academiausbbogedu-my.sharepoint.com/personal/lcmarquezs_academia_usbbog_edu_co/_layouts/15/embed.aspx?UniqueId=77840d7c-9dfd-488d-b1c1-49a7e87c0ce9&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
            modal2: "https://www.youtube.com/embed/ASJ6wSzMdZY?si=DrMNP5E0cJw8aCY1"
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
