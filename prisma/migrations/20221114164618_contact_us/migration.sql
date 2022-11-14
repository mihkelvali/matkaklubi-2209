-- CreateTable
CREATE TABLE "ContactUsMessage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "clientMessage" TEXT NOT NULL,

    CONSTRAINT "ContactUsMessage_pkey" PRIMARY KEY ("id")
);
