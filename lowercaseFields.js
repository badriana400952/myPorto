import fetch from "node-fetch";
//tambahkan di package.json  "type": "module",
const token = "mRHQD7wzXoQZmmXCFcVOKd4A6Nqh85Dk"; 
const tableId = 731981;
const fieldKey = "name"; 

const baseUrl = `https://api.baserow.io/api/database/rows/table/${tableId}/?user_field_names=true&page=21`;


async function fetchAllRows() {
  let results = [];
  let next = baseUrl;

  while (next) {
    const res = await fetch(next, {
      headers: { Authorization: `Token ${token}` },
    });

    if (!res.ok) {
      console.error("Gagal mengambil data:", await res.text());
      break;
    }

    const data = await res.json();
    results = results.concat(data.results);
    next = data.next; 
  }

  return results;
}

async function run() {
  console.log(" Mengambil data dari Baserow...");
  const rows = await fetchAllRows();

  console.log(` Ditemukan ${rows.length} data.`);
  if (rows.length === 0) return console.log(" Tidak ada data ditemukan.");

  // Tampilkan contoh struktur row pertama
  console.log(" Contoh data:", rows[0]);

  for (const row of rows) {
    const original = row[fieldKey];
    if (!original || typeof original !== "string") continue;

    const lower = original.toLowerCase();

    if (original !== lower) {
      console.log(`✏ Ubah: "${original}" → "${lower}"`);

      const updateRes = await fetch(
        `https://api.baserow.io/api/database/rows/table/${tableId}/${row.id}/?user_field_names=true`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ [fieldKey]: lower }),
        }
      );

      if (!updateRes.ok) {
        console.error(` Gagal update ID ${row.id}:`, await updateRes.text());
      } else {
        console.log(` Berhasil update ID ${row.id}`);
      }
    }
  }

  console.log(" Selesai!");
}

run().catch((err) => {
  console.error(" Terjadi error:", err);
});
