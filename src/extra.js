import React from 'react'
import { G } from '../../expo/node_modules/react-native-svg'

const Extra = ({ children, ...props }) => {
    return (
        <G>
            {
                React.Children.map(children, child => {
                    return React.cloneElement(child, props)
                })
            }
        </G>
    )
}

export default Extra
