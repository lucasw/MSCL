//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 4.0.0
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class GpioConfiguration : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal GpioConfiguration(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(GpioConfiguration obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~GpioConfiguration() {
    Dispose(false);
  }

  public void Dispose() {
    Dispose(true);
    global::System.GC.SuppressFinalize(this);
  }

  protected virtual void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_GpioConfiguration(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
    }
  }

  public Bitfield pinMode {
    set {
      msclPINVOKE.GpioConfiguration_pinMode_set(swigCPtr, Bitfield.getCPtr(value));
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      global::System.IntPtr cPtr = msclPINVOKE.GpioConfiguration_pinMode_get(swigCPtr);
      Bitfield ret = (cPtr == global::System.IntPtr.Zero) ? null : new Bitfield(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public byte pin {
    set {
      msclPINVOKE.GpioConfiguration_pin_set(swigCPtr, value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      byte ret = msclPINVOKE.GpioConfiguration_pin_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public GpioConfiguration.Feature feature {
    set {
      msclPINVOKE.GpioConfiguration_feature_set(swigCPtr, (int)value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      GpioConfiguration.Feature ret = (GpioConfiguration.Feature)msclPINVOKE.GpioConfiguration_feature_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public byte behavior {
    set {
      msclPINVOKE.GpioConfiguration_behavior_set(swigCPtr, value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      byte ret = msclPINVOKE.GpioConfiguration_behavior_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public void pinModeValue(byte val) {
    msclPINVOKE.GpioConfiguration_pinModeValue__SWIG_0(swigCPtr, val);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public byte pinModeValue() {
    byte ret = msclPINVOKE.GpioConfiguration_pinModeValue__SWIG_1(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public GpioConfiguration() : this(msclPINVOKE.new_GpioConfiguration(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public enum Feature {
    UNUSED_FEATURE = 0x00,
    GPIO_FEATURE = 0x01,
    PPS_FEATURE = 0x02,
    ENCODER_FEATURE = 0x03,
    EVENT_TIMESTAMP_FEATURE = 0x04
  }

  public enum GpioBehavior {
    UNUSED_BEHAVIOR = 0x00,
    GPIO_INPUT_BEHAVIOR = 0x01,
    GPIO_OUTPUT_LOW_BEHAVIOR = 0x02,
    GPIO_OUTPUT_HIGH_BEHAVIOR = 0x03
  }

  public enum PpsBehavior {
    PPS_UNUSED = 0x00,
    PPS_INPUT = 0x01,
    PPS_OUTPUT = 0x02
  }

  public enum EncoderBehavior {
    ENCODER_UNUSED = 0x00,
    ENCODER_A = 0x01,
    ENCODER_B = 0x02
  }

  public enum EventTimestampBehavior {
    EVENT_TIMESTAMP_UNUSED = 0x00,
    EVENT_TIMESTAMP_RISING = 0x01,
    EVENT_TIMESTAMP_FALLING = 0x02,
    EVENT_TIMESTAMP_EDGE = 0x03
  }

  public enum PinModes {
    OPEN_DRAIN = 0x01,
    PULLDOWN = 0x02,
    PULLUP = 0x04
  }

}

}
