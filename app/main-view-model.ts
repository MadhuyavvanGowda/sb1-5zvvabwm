import { Observable } from '@nativescript/core';
import { alert } from '@nativescript/core/ui/dialogs';

export class HelloWorldModel extends Observable {
  constructor() {
    super();
  }

  onEmergency() {
    alert({
      title: "Emergency Services",
      message: "Connecting to nearest ambulance service...",
      okButtonText: "OK"
    });
  }

  onMedicineDelivery() {
    alert({
      title: "Medicine Delivery",
      message: "Browse and order medicines",
      okButtonText: "OK"
    });
  }

  onDoctorConsultation() {
    alert({
      title: "Doctor Consultation",
      message: "Book an appointment with a doctor",
      okButtonText: "OK"
    });
  }

  onLabTests() {
    alert({
      title: "Lab Tests",
      message: "Book diagnostic tests",
      okButtonText: "OK"
    });
  }

  onNearbyHospitals() {
    alert({
      title: "Nearby Hospitals",
      message: "Finding hospitals in your area...",
      okButtonText: "OK"
    });
  }

  onMedicalHistory() {
    alert({
      title: "Medical History",
      message: "View your medical records",
      okButtonText: "OK"
    });
  }

  onReports() {
    alert({
      title: "Reports & Prescriptions",
      message: "Access your medical documents",
      okButtonText: "OK"
    });
  }

  onPaymentOptions() {
    alert({
      title: "Payment Options",
      message: "Manage your payment methods",
      okButtonText: "OK"
    });
  }

  onFeedback() {
    alert({
      title: "Feedback",
      message: "Share your experience",
      okButtonText: "OK"
    });
  }
}