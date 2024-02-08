-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tuitions" (
    "id" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "tuitions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tuitions" ADD CONSTRAINT "tuitions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
