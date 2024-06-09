import React from "react";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return <img src={currentVan.imageUrl} className="host-van-detail-image" />;
}
