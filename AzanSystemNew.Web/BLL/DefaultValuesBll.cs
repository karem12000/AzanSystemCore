﻿using AzanSystemNew.Web.Models;
using System.Text.Encodings.Web;
using System.Text.Json;

namespace AzanSystemNew.Web.BLL
{
    public class DefaultValuesBll(IWebHostEnvironment webHostEnvironment)
    {
        private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

        private readonly string _fileName = "index.json";

        public object? GetValues()
        {
            var filePath = Path.Combine(_webHostEnvironment.WebRootPath, "resources", _fileName);
            if (!File.Exists(filePath))
            {
                return new { };
            }

            var json = File.ReadAllText(filePath);
            if (string.IsNullOrEmpty(json)) json = "{}";
            return JsonSerializer.Deserialize<DefaultValues>(json);
        }

        public string SaveValues(DefaultValues mdl)
        {
            try
            {
                var filePath = Path.Combine(_webHostEnvironment.WebRootPath, "resources", _fileName);
                if (!File.Exists(filePath))
                {
                    using (FileStream fs = File.Create(filePath))
                    {
                    }
                }

                var json = JsonSerializer.Serialize(mdl, new JsonSerializerOptions { Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping, WriteIndented = true });
                File.WriteAllText(filePath, json);
                return "تم الحفظ";
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

        }
    }
}
