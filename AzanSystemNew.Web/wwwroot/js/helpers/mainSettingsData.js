export async function getMainSettingsData() {
    let response = await fetch("/Api/Values/GetSettings");
    let jsonRes = await response.json();
    return jsonRes;
}
//export async function getMainSettingsData() {
//    let response = getMainSettingsDataFromClient();
//    if (response != null) { return response; } else {
//        let response = await fetch("/Api/Values/GetSettings");
//        let jsonRes = await response.json();
//        if (Object.keys(jsonRes).length && jsonRes.City != undefined && jsonRes.City != null) {
//            saveMainSettingsDataToClient(jsonRes);
//        }
//        return jsonRes;
//    }

//}
export async function saveMainSettingsData(data) {
    try {
        let response = await fetch("/Api/Values/SaveSettings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data),
        });

        const result = await response;
        if (result.status == 200) {
            Swal.fire({
                icon: "success",
                title: "تم الحفظ",
                timer: 1500,
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "خطأ",
                timer: 1500,
            });
        }
  } catch (error) {
      console.log(error)
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
  //return data == null
  //  ? { City: "Riyadh", CityAr: "الرياض", Lang: "ar" }
    //  : JSON.parse(data);
  return JSON.parse(data);
}
export function saveMainSettingsDataToClient(data) {
  localStorage.setItem("mainSettings", JSON.stringify(data));
  Prayers();
}
