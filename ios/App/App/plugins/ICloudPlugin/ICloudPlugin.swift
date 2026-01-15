import Capacitor
import Foundation

@objc(ICloudPlugin)
public class ICloudPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ICloudPlugin"
    public let jsName = "ICloud"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "set", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "get", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "sync", returnType: CAPPluginReturnPromise),
    ]
    
    private let keyStore = NSUbiquitousKeyValueStore()

    @objc func set(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        keyStore.set(value, forKey: "MyString")
        call.resolve(["success": true])
    }

    @objc func get(_ call: CAPPluginCall) {
        let value = keyStore.string(forKey: "MyString") ?? ""
        call.resolve(["value": value])
    }

       @objc func sync(_ call: CAPPluginCall) {
        keyStore.synchronize()
        call.resolve(["success": true])
    }
}
    

