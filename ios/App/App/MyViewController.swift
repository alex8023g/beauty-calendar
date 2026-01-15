//
//  MyViewController.swift
//  App
//
//  Created by grachevdev on 28.11.2025.
//

import UIKit
import Capacitor

class MyViewController: CAPBridgeViewController {
    var keyStore: NSUbiquitousKeyValueStore?
    @objc weak var textField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        

        // Do any additional setup after loading the view.
    }
    
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(EchoPlugin())
        bridge?.registerPluginInstance(ScreenOrientationPlugin())
        bridge?.registerPluginInstance(ICloudPlugin())
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
