import { Picker } from '@react-native-picker/picker'
import useRepoContext from '../../../hooks/useRepoContext'
import theme from '../../theme/theme'

export const values = [
    {
        label: 'Latest',
        value: 'latest'
    },
    {
        label: 'Highest rated',
        value: 'highest'
    },
    {
        label: 'Lowest rated',
        value: 'lowest'
    }
]


const FilterPicker = () => {
    const { filter, setFilter } = useRepoContext()

    return (

        <Picker
                selectedValue={filter}
                onValueChange={(value) => setFilter(value)}
                style={{
                    backgroundColor: theme.background.badge,
                    borderRadius: 3,
                    color: 'white',
                    fontFamily: theme.fontWeight.bold,
                    marginBottom: 10
                }}
            >
            {values.map(({ label, value, enabled }) => (
                <Picker.Item key={value} label={label} value={value} enabled={enabled ? enabled: undefined}/>
            ))}
        </Picker>

    )
}

export default FilterPicker