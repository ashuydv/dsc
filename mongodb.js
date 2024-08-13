import { MongoClient } from 'mongodb';

const uri = import.meta.env.VITE_MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

if (!uri) {
    throw new Error('Please add your Mongo URI to .env');
}

let client;
let clientPromise;

if (import.meta.env.MODE === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    // eslint-disable-next-line no-undef
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        // eslint-disable-next-line no-undef
        global._mongoClientPromise = client.connect();
    }
    // eslint-disable-next-line no-undef
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;