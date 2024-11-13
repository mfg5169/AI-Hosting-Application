import { pgTable, serial,text, varchar } from "drizzle-orm/pg-core"

export const AIOutput=pgTable('AIoutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('Airesponse'),
    templateslug:varchar('templateslug').notNull(),
    createdBy:varchar('email'),
    createdAt:varchar('createdAt')
})