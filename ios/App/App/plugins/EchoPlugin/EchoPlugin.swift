import Capacitor

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "EchoPlugin"
    public let jsName = "Echo"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "icloudset", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "icloudget", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "icloudsync", returnType: CAPPluginReturnPromise),
    ]
    
    private let keyStore = NSUbiquitousKeyValueStore()
 
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve(["value": value])
    }

    @objc func icloudset(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        keyStore.set(value, forKey: "MyString")
        // keyStore.synchronize()
        call.resolve(["success": true])
    }

    @objc func icloudget(_ call: CAPPluginCall) {
        let value = keyStore.string(forKey: "MyString") ?? ""
        print("value: \(value)")
        call.resolve(["value": value])
    }

       @objc func icloudsync(_ call: CAPPluginCall) {
        keyStore.synchronize()
       print("icloudsynced")
        call.resolve(["success": true])
    }
}
