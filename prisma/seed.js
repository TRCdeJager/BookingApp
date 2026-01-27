import { PrismaClient } from '@prisma/client';
import userData from '../src/data/users.json' with { type: 'json' };
import reviewData from '../src/data/reviews.json' with { type: 'json' };
import propertyData from '../src/data/properties.json' with { type: 'json' };
import hostData from '../src/data/hosts.json' with { type: 'json' };
import bookingData from '../src/data/bookings.json' with { type: 'json' };

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });


async function main() {
    const
        { users } = userData
        , { reviews } = reviewData
        , { properties } = propertyData
        , { hosts } = hostData
        , { bookings } = bookingData;

    for (const review of reviews) {
        await prisma.review.upsert({
            where: { id: review.id },
            update: {},
            create: review
        });
    }
    for (const prop of properties) {
        await prisma.property.upsert({
            where: { id: prop.id },
            update: {},
            create: prop
        });
    }
    for (const host of hosts) {
        await prisma.host.upsert({
            where: { id: host.id },
            update: {},
            create: host
        });
    }
    for (const booking of bookings) {
        await prisma.booking.upsert({
            where: { id: booking.id },
            update: {},
            create: booking
        });
    }

    for (const user of users) {
        await prisma.user.upsert({
            where: { id: user.id },
            update: {},
            create: user
        });
    }
}


main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

