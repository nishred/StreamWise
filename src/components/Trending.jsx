import React, { useEffect, useState, useRef } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

import styled from "styled-components";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

//w-100px h-200px

const images = [
  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABUnlypHxcWhFE8kHPjhbp-R_A2H69cU6SfgeAKDKXJUlP4fMfDaLTrADqIfPYJTIBbgEz24Kd0_pM9_vxCYBY8l1tiq_YpmJw8HZB3l662xK-d_1kEXItWOJHyoTPc-A_J4QZfPcofaKgy6-IuVovNnul4tTu99C7ZHTx6rSEiTqFVN6ZF-QVK26lOCkAQ6l2KI8mXRGla1YZIo8.webp?r=f67",
  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABZRKpnGsCOt35ksFOh3hC2g6vDYUGD3_cY6MF6jtJluJLh3rn_4Yqs_nksqgWCa-iKAYS6n0UboRnrUa8SlwVjh3JIOzoZkM8XUIiYuphINU0CfasmVbhvd25K12hy4A7-bdx9MJfliaikyLdObCaDF9rqNlLshxpFgAFXrUctS95n_mOFv_GFx0s3bob0CgVU3JAGN5XeGGFR1n.webp?r=6b8",

  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABeC1N8k28QMqp06bmWrde83J_2hFg5mrtaT-MG0e6sGxiOuA_2_N0W3LxZTu-44Q23qoxnzT7NjBVFqz-9u00UPb05Y1ztQGrTm5w9xnVEuoN9gwfEAskc5LRGYF_clfsFZGhXvFvj7LmN6ex6eYlgN0tNHN3zxJNGMF00xH88eiy-u20ragAqhwVoV33udIf_gV5BzJ6v-IAQyT.webp?r=129",
  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABVIvD-xtvkWFkcpqjE8ZfQrdcqfoSrdEkrdrVsBEyz-7OZi9gWYFmHgeFBBVQYpsbqbULOlTYoaZSpW2Q0AZCAKfL9NaiTfWWS8gfdhShjfAXAwf44ZioDCMg8BVvCKd7WNQ7gMVq3158iGtdBIb.webp?r=eb6",

  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABUBvMLmaIJj9h3liVPGMUvvP6A8GynN9tO5OEBnJwSFAy1e388EWsko7fEhagOlA4RIRu-Flrf6uCGVZEdfAUxgk3PjUHBvcMrymRfn3QAMASmjse6CYBpEpWSLF8tMAHEhwCiAVLxPbJvp8Q3UkEFV3HbGf5ISX789VRXBaa2bCSiMUoeBYRTZ4YlhYBCgc4dhX0AQhy-4wBlo_.webp?r=c03",
  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABYvdG91vqfkH51vJxW46t_6ebi1cjdCygDmmi4Fj1rUj8Qw77lamWXFTDNC6qQfGfjrCNuFsz5hEBjZwOgl3yeNiDGpMeW1uJ-s0ha2gg9E9_E-hpDh6Ywu3vyAHcFPtikkY42IxBc_EFc0gm7n8_8x4GWMoo1Z4zTAL8SIj7A.webp?r=ca1",

  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABavR8B1w0l7q8dOIqakSPHD54dCIAfp_esUng9ReCdnVZsh6Gv9alvWFxkez2Ulyrgvuif0NoVVcybvBKS9kGZfRk5jhOAs1hDPh270IfLZ_sM78NT1G0V2KsGm9Jgm6onp1CWcMJ7ygPM6HNikrEeiIoiA94SytOWoN46FtqhESulv_6tOh0ybwMKz_wsoO3v2GYHPebpbp34lV.webp?r=04e",

  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABU5k1ZO1U9EmN8morKoa_-bBKyrOAToG-4u0-4Ol_erOCi3tOaqHJutzpkriUps4lBla80-0obGATmvb5xginkgqii06awlDrcK-Us1WX9ilXc_yVo6UnR0WTLlFWGktrRiU66TJNVfHCSIc-fbn.webp?r=1f6",

  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABb33ndHIjVsLXI5xoHWIZ2MoVvHOIkXE4w6AV3EAQ5GH9VzvDmcISz6Torfugk879UoTvjrgbmLdnERuXtzhOjSCXuk56LxwmBXEJPl0Nxi4mRllBzpW4z02dJ3ext_p-slJpgn1GiJ1Ze376hbnMoqR6i010wjum-J9jCDiTUPw3AAib1xzERIpd3nqDSMgnSTqu_43sBec7xWJ.webp?r=513",

  "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABQ4iYTL8M9Kl-XY-u9mAow6xXPplORdbdOrDg-HTR89avsOEYkkncIEW-uDS419Vh6zi5YLc4PMfIqF5dZlEbf90iglQUOMHnPg5_1N9gxR2eZ-pilG5hKGpA7Ns32teBHrxZ-TPrvNNHP_hlgee.webp?r=435",
];

const StyledImage = styled.img`
  min-width: 0px;
  width: 100px;
  height: 200px;
  display: inline;
  margin: 0px 8px;
`;

const imageWidth = 116;

const totalImages = images.length;

const Trending = () => {
  const elementRef = useRef(null);
  const [windowWidth, setwindowWidth] = useState(0);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setwindowWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const imagesPerPage = React.useMemo(() => {
    const count = Math.floor(windowWidth / imageWidth);

    return count;
  }, [windowWidth]);

  const totalPages = React.useMemo(
    () => Math.ceil(totalImages / imagesPerPage),
    [imagesPerPage]
  );

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * imagesPerPage;

  const endIndex = startIndex + imagesPerPage - 1;

  console.log("images per page", imagesPerPage);

  console.log("start", startIndex);

  console.log("end", endIndex);

  const filteredImages = images.filter((image, idx) => {
    if (idx >= startIndex && idx <= endIndex) return true;
  });

  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] px-24 gap-x-4">
      {currentPage > 1 && (
        <button
          className="text-white flex justify-end items-center col-start-1 col-end-2"
          onClick={() => {
            setCurrentPage((page) => {
              if (page > 1) return page - 1;
              else return page;
            });
          }}
        >
          <GrPrevious size={32} />
        </button>
      )}

      <div
        ref={elementRef}
        className="overflow-hidden whitespace-nowrap my-16 text-center col-start-2 col-end-5"
      >
        {filteredImages.map((src, idx) => {
          return <StyledImage src={src} key={idx} />;
        })}
      </div>

      {!(currentPage === totalPages) && (
        <button
          className="text-white col-start-5 col-end-6"
          onClick={() => {
            setCurrentPage((page) => {
              if (page < totalPages) return page + 1;
              else return page;
            });
          }}
        >
          <GrNext size={32} />
        </button>
      )}
    </div>
  );
};

export default Trending;
