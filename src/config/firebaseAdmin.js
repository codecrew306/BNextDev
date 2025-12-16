import admin from 'firebase-admin';

// TODO: Initialize with actual credentials or service account
if (!admin.apps.length) {
    admin.initializeApp({
        // credential: admin.credential.applicationDefault(), // Example
    });
}

export default admin;
