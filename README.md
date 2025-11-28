# LoomLogic

โปรเจกต์เว็บแอป **Next.js** ใช้ตัวจัดการแพ็กเกจ **pnpm** พร้อมติดตั้ง Axios, React Query และ shadcn/ui

---

## 📦 คำสั่งที่ใช้ติดตั้งและตั้งค่าโปรเจกต์

สามารถรันตามลำดับนี้ได้เลย:

```bash
# 1) สร้างโปรเจกต์ Next.js ด้วย pnpm
pnpm create next-app@latest my-loomlogic --yes

# 2) เข้าโฟลเดอร์โปรเจกต์
cd my-loomlogic

# 3) ติดตั้ง Axios (เรียก API)
pnpm add axios

# 4) ติดตั้ง TanStack React Query + Devtools
pnpm add @tanstack/react-query @tanstack/react-query-devtools

# 5) ติดตั้งและ init shadcn/ui
pnpm dlx shadcn@latest init

# 6) คำสั่งรันโปรเจกต์
pnpm run dev

# 7) ติดตั้ง .prettierrc
pnpm add --save-dev --save-exact prettier
pnpm exec prettier . --write
npx prettier . --check  
```
