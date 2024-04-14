import { z } from "zod";

const Zod = () => {
  const schema = z.object({
    name: z.string(),
    age: z.number().positive(),
  });

  type User = z.infer<typeof schema>

  const data = {
    name: "John",
    age: 30,
  };

  try {
    const parsedData = schema.parse(data);
    console.log("Data is valid:", parsedData);
  } catch (error) {
    console.error("Data is invalid:", error);
  }
};

export default Zod;
