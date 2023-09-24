import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true },
    orderBy: { _count: { id: "desc" } },
  });
  console.log(students);
});

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    where: { jobId: null },
    _count: { id: true },
    orderBy: { _count: { class: "desc" } },
  });
  console.log(students);
});
