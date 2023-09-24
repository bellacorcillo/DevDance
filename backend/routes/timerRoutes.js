const Stats = require('../models/stats');

router.post('/startTimer', async (req, res) => {
  try {
   

    
    const userId = req.user.id; 
    const stats = await Stats.findOne({ user: userId });

    if (stats) {
      stats.totalPomodoros++;
      await stats.save();
    }

    res.json({ message: 'Timer started successfully.' });
  } catch (error) {
    console.error('Error starting timer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/stopTimer', async (req, res) => {
  try {
    
  
    const userId = req.user.id; 
    const stats = await Stats.findOne({ user: userId });

    if (stats) {
      stats.totalBreaks++;
      await stats.save();
    }

    res.json({ message: 'Timer stopped successfully.' });
  } catch (error) {
    console.error('Error stopping timer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

