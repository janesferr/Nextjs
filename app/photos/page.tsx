import React from "react";
interface Photo {
  albumId: number;
  title: string;
  url: string;
}
const Album = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
    next: { revalidate: 10 },
  });
  const photos: Photo[] = await res.json();

  return (
    <div>
      <>
        <h1>Photos</h1>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Title</th>
              <th>Photo URL: </th>
            </tr>
          </thead>
          <tbody>
            {photos.map((photo) => (
              <tr key={photo.albumId}>
                <td>{photo.title}</td>
                <td>
                  <img src={photo.url} alt="" srcset="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default Album;
