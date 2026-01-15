import Foundation
import Capacitor

@objc(ScreenOrientationPlugin)
public class ScreenOrientationPlugin: CAPPlugin, CAPBridgedPlugin {
  public let identifier = "ScreenOrientationPlugin"
  public let jsName = "ScreenOrientation"
  public let pluginMethods: [CAPPluginMethod] = [
      CAPPluginMethod(name: "orientation", returnType: CAPPluginReturnPromise),
      CAPPluginMethod(name: "lock", returnType: CAPPluginReturnPromise),
      CAPPluginMethod(name: "unlock", returnType: CAPPluginReturnPromise)
  ]

  private let implementation = ScreenOrientation()

  @objc public func orientation(_ call: CAPPluginCall) {
    let orientationType = implementation.getCurrentOrientationType()
    call.resolve(["type": orientationType])
  }

  @objc public func lock(_ call: CAPPluginCall) {
    call.resolve()
  }

  @objc public func unlock(_ call: CAPPluginCall) {
    call.resolve();
  }
    
  override public func load() {
    NotificationCenter.default.addObserver(
      self,
      selector: #selector(self.orientationDidChange),
      name: UIDevice.orientationDidChangeNotification,
      object: nil)
  }

    deinit {
      NotificationCenter.default.removeObserver(self)
    }

    @objc private func orientationDidChange() {
      // Ignore changes in orientation if unknown, face up, or face down
      if UIDevice.current.orientation.isValidInterfaceOrientation {
        let orientation = implementation.getCurrentOrientationType()
        notifyListeners("screenOrientationChange", data: ["type": orientation])
      }
    }
}
