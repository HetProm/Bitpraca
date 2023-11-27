// composables/useFilters.js

export const useFilters = () => {
    const technologies = useState('technologies', () => [
        { name: 'HTML', isActive: false },
        { name: 'JavaScript', isActive: false },
        { name: 'React.js', isActive: false },
        { name: 'C#', isActive: false },
        { name: 'CSS', isActive: false }
      ]);
    const experienceLevel = useState('experienceLevel', () => 0);
    const remoteworkSwitchState = useState('remoteworkSwitchState', () => false);
    const priceRangeSwitchState = useState('priceRangeSwitchState', () => false);
    const refreshClick = useState('refreshClick', () => [{search: false},{filters: false}]);
    const searchTermFilter = useState('searchTermFilter', () => '');
    
    
    const toggleSearchrefresh = () => {
      refreshClick.value[0].search = !refreshClick.value[0].search;
      setTimeout(() => {
        refreshClick.value[0].search = false;
      }, 100);
    }
      
    const toggleFilterhrefresh = () => {
      refreshClick.value[1].filters = !refreshClick.value[1].filters;
      setTimeout(() => {
        refreshClick.value[1].filters = false;
      }, 100);
    }
      
    const toggleTechnology = (index) => {
        technologies.value[index].isActive = !technologies.value[index].isActive;
    };
    
    const setExperienceLevel = (level) => {
      experienceLevel.value = parseInt(level);
    };
  
    const setRemoteworkSwitchState = () => {
      remoteworkSwitchState.value = !remoteworkSwitchState.value;
    };
  
    const setPriceRangeSwitchState = () => {
      priceRangeSwitchState.value = !priceRangeSwitchState.value;
    };
  
    return { technologies, experienceLevel, remoteworkSwitchState, priceRangeSwitchState,searchTermFilter, refreshClick,toggleTechnology, setExperienceLevel, setRemoteworkSwitchState, setPriceRangeSwitchState, toggleSearchrefresh , toggleFilterhrefresh };
  };
  