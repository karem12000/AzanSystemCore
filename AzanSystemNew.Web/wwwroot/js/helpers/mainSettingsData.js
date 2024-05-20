export async function getMainSettingsData() {
  let response = await fetch("../../resources/index.json");
  return await response.json();
}
export async function saveMainSettingsData(data) {
  try {
    let response = await fetch("../../resources/languages.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    Swal.fire({
      icon: "success",
      title: "تم الحفظ",
      text: result.join(""),
      timer: 1500,
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: error,
      timer: 1500,
    });
  }
}
export function getMainSettingsDataFromClient() {
  let data = localStorage.getItem("mainSettings");
  return data == null
    ? { city: "Riyadh", cityAr: "الرياض", language: "ar" }
    : JSON.parse(data);
}
export function saveMainSettingsDataToClient(data) {
  localStorage.setItem("mainSettings", JSON.stringify(data));
  Swal.fire({
    icon: "success",
    title: "تم الحفظ",
    timer: 1500,
  });
  Prayers();
}
