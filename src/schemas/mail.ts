import z from "zod";

export const contactValidator = z.object({
  name: z
    .string()
    .min(3, { message: "* Name must be at least 3 characters." })
    .max(50, { message: "Name can't be more than 50 characters." }),
  email: z.string().email({ message: "* Your email seems invalid." }),
  message: z
    .string()
    .min(2, { message: "* You can at least write Hi." })
    .max(200, { message: "* Message can contain max 200 characters." }),
});

export type ContactType = z.infer<typeof contactValidator>;
