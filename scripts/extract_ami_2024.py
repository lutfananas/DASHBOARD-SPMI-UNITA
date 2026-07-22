"""
Extract text from all AMI 2023-2024 PDFs (audit conducted for academic year 2023-2024)
based on Permenristekdikti 53/2023.
Output: /home/z/my-project/scripts/ami_2024_extracted/
"""
import os, sys, pdfplumber, json

SRC = "/home/z/my-project/upload/AMI_2023_2024"
OUT = "/home/z/my-project/scripts/ami_2024_extracted"
os.makedirs(OUT, exist_ok=True)

files = sorted(os.listdir(SRC))
results = {}

for fname in files:
    if not fname.endswith('.pdf'):
        continue
    path = os.path.join(SRC, fname)
    print(f"\n=== Extracting: {fname} ===")
    try:
        text_pages = []
        with pdfplumber.open(path) as pdf:
            n = len(pdf.pages)
            for i, page in enumerate(pdf.pages):
                try:
                    t = page.extract_text() or ""
                except Exception as e:
                    t = f"[ERROR p{i+1}: {e}]"
                text_pages.append(t)
        full = "\n\n=== PAGE BREAK ===\n\n".join(text_pages)
        out_txt = os.path.join(OUT, fname.replace('.pdf', '.txt'))
        with open(out_txt, 'w', encoding='utf-8') as f:
            f.write(full)
        results[fname] = {"pages": n, "chars": len(full), "out": out_txt}
        print(f"  pages={n}, chars={len(full)}")
    except Exception as e:
        print(f"  ERROR: {e}")
        results[fname] = {"error": str(e)}

with open(os.path.join(OUT, "_summary.json"), 'w') as f:
    json.dump(results, f, indent=2)

print(f"\n\nDone. {len(results)} files processed.")
